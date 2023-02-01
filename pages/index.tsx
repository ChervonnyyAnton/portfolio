import ServiceCard from "@/components/ServiceCard";
import { services } from "../data";

const index = ({}) => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="m-3 font-medium">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo ex
        laudantium rem, excepturi dolores incidunt recusandae debitis adipisci,
        commodi dolor atque fuga! Non, accusamus perferendis. Incidunt cum eius
        et quas.
      </h5>
      <div className="flex-grow p-4 mt-5 bg-white dark:bg-dark-500" style={{ marginLeft: "-1.5rem", marginRight: '-1.5Rem'}}>
        <h6 className="my-3 text-xl font-bold tracking-wider">What I can offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1">
              <ServiceCard service={service} key={service.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;