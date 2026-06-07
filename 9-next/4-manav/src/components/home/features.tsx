import { FC } from "react";
import { FaLeaf, FaMoneyBillWave, FaShieldAlt } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { getTranslations } from "next-intl/server";

const Features: FC = async () => {
  const t = await getTranslations("Features");

  const featureList = [
    {
      icon: <MdLocalShipping />,
      title: t("delivery-title"),
      description: t("delivery-desc"),
      color: "bg-blue-100",
    },
    {
      icon: <FaLeaf />,
      title: t("organic-title"),
      description: t("organic-desc"),
      color: "bg-green-100",
    },
    {
      icon: <FaMoneyBillWave />,
      title: t("price-title"),
      description: t("price-desc"),
      color: "bg-yellow-100",
    },
    {
      icon: <FaShieldAlt />,
      title: t("security-title"),
      description: t("security-desc"),
      color: "bg-red-100",
    },
  ];

  return (
    <div className="my-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {featureList.map((feature, key) => (
        <div key={key} className={`flex items-center gap-4 p-4 rounded-lg ${feature.color}`}>
          {feature.icon}

          <div>
            <h3 className="font-semibold">{feature.title}</h3>
            <p className="text-zinc-800">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
