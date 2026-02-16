## API Nedir ?

- API, bi uygulmanın başka bir uygulmayla konuşmasını sağlayan arayüzdür.
- İki farklı yazılımın biribirleriyle veri alışverişi yapmasını sağlar
- Frontend projelerinde ekrananı basıcağımız veriyi elde etmek için api'a istek atarız api ise veritbanından ilgili verileri alıp getiren katmandır.

## Json-Server

- Hızlıca bir REST API oluşturmak için kullanılan bir node.js kütüphanesidir
- Mock (sahte) bir api oluşturmak isteyen frontend geliştiricilerinin işine yarar
- Gerçek bi veritabanı kullanmak yerine `db.json` dosyası üzerinden çalışan bir sahte api oluşturur.

## Neden bir Mock API'a ihtiyaç duyarım ?

- Mock API'lar prototipleme amacıyla kullanılabilir çünkü Mock API kullanılan projeler yayınlanamaz.
- Mock API'lara get | post | put | patch | delete isteklerini atarak kendimizi geliştiriceğimiz basit projeler için kullanabilirz

## Json Server Kurulum

1. projeye `json-server` kütüphanesi indir

2. projenin en dış klasörünü veritbanı görevi görücek `db.json` dosyası oluştur

3. api'ı ayağa kaldırmak için terminale `npx json-server --watch db.json --port 5000` komutunu yazarız

# Axios

- Axios, tarayıcıda (frontend) ve node.js (backend) ortamında HTTP istekleri atmamızı sağlayan fetch muadili XMLHTTPRequest tabanlı bir kütüphane

## Neden axios?

- `fetch` yöntemine göre daha pratik
- istekleri otomatik olarak json ve js formatlarına çevir (serialization)
- isteklerde gönderilmesi gereken bazı gerekli header'ları otomatik ekler
- intercept özelliği ile yapılan her istek veya gelen her cevapda fonksiyon çalıştırabilir
- timeout, baseUrl, header, params gibi ayarları yapılabilir

- **GET**

```jsx
// api'dan todo'ları almak için get isteği
fetch("http://localhost:5000/todos?_sort=date&_order=desc")
  .then((res) => res.json())
  .then((data) => setTodos(data));

// api'dan todo'ları almak için get isteği
const params = { _sort: "date", _order: "desc" };
api
  .get("/todos", { params }) //
  .then((res) => console.log(res.data));
```

- **POST**

```JSX
    // api'a yeni todo'yu oluşturmak için istek at
    fetch("http://localhost:5000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    })
      // api isteği başarılı olursa yanıt olarak gelen id'li todoya eriş
      .then((res) => res.json())
      // state'e yeni todo'yu ekle
      .then((data) => createTodo(data));

    // api'a yeni todo'yu oluşturmak için istek at
    api.post("/todos", newTodo)
    .then(res => createTodo(res.data))
```

- **DELETE**

```JSX
    // api'a todoyu kaldırmak için istek at
    fetch(`http://localhost:5000/todos/${id}`, {
      method: "DELETE",
    })
      // api isteği başarılı olursa state'den de kaldır
      .then(() => setTodos(todos.filter((todo) => todo.id !== id)));

    api
      .delete(`/todos/${id}`)
      // api isteği başarılı olursa state'den de kaldır
      .then(() => setTodos(todos.filter((todo) => todo.id !== id)));
```
