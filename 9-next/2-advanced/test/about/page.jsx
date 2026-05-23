import ClientComponent from "./client-component";
import ServerComponent from "./server-component";

const About = async ({}) => {
  // if ("kullanıcı admin değilse") return notFound();

  return (
    <div className="space-y-10">
      <ServerComponent />

      {/* HOC:Higher Order Component */}
      {/* <ClientComponent>
        <ServerComponent />
      </ClientComponent> */}
    </div>
  );
};

export default About;
