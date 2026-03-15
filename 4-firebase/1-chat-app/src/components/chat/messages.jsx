import { collection, onSnapshot, query, where, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import Message from "./message";

const Messages = ({ room }) => {
  const [messages, setMessasges] = useState([]);

  // veritabanındaki mesajları anlık olarak al
  useEffect(() => {
    // belgelerini alıcağımız kolleksiyonun referansını al
    const collectionRef = collection(db, "messages");

    // sorgu ayarlarını yap
    const q = query(collectionRef, where("room", "==", room), orderBy("createdAt", "asc"));

    // messages kolleksiyonundaki verileri al
    const unsub = onSnapshot(q, (snapshot) => {
      // mesajların geçici olarak tutulduğu dizi
      const temp = [];

      // her belgenin içerisindeki dataya erişip diziye aktar
      snapshot.docs.forEach((doc) => temp.push(doc.data()));

      // mesajları state'e aktar
      setMessasges(temp);
    });

    // kullanıcı sayfadan ayrılınca onSnapShot'ı durdur
    return () => {
      unsub();
    };
  }, []);

  return (
    <main className="flex-1 p-3 flex flex-col w-full overflow-y-auto overflow-x-hidden relative gap-3">
      {messages.length < 1 ? (
        <div className="h-full grid place-items-center text-zinc-400">
          <p>Sohbete ilk mesajı gönderin</p>
        </div>
      ) : (
        messages.map((i, key) => <Message item={i} key={key} />)
      )}
    </main>
  );
};

export default Messages;
