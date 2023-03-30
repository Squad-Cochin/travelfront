import React from "react";
import Styles from "./RadioBox.module.scss";

export const RadioBox = () => {
  const radiobox = [
    {
      id: 1,
      title: "Sagrada Familia Regular Entry",
      content:
        "What is included on this option description. Loren ipsum all the facts dolor maer sit consecuteur adisciplining.",
      linklabel: "",
      url: "#",
      subtitle: "Total $171,20 per adult",
      subdesc: "2 Adults x $85.60",
    },
  ];
  return (
    <>
      {radiobox.map((radiolist) => {
        return (
          <>
            <label className={Styles.radioLabel} htmlFor="" key={radiolist.id}>
              <h3 className={Styles.radioTitle}>{radiolist.title}</h3>
              <div className={Styles.radioContent}>{radiolist.content}</div>
              <a className={Styles.radioLink} href={radiolist.url}>
                {radiolist.linklabel}
              </a>
              <h4 className={Styles.radioSubhd}>{radiolist.subtitle}</h4>
              <div className={Styles.radioSubdesc}>{radiolist.subdesc}</div>
              <input type="radio"></input>
            </label>
          </>
        );
      })}
    </>
  );
};
export default RadioBox;
