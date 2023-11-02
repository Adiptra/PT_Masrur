/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import { footerForm } from "../../constants/content/footer";
import { logoContact } from "../../images";
import { Container } from "../../layouts";
import Button from "./Button";
const Footer = () => {
  return (
    <div>
      <div className="bg-[#0F172A] text-white pb-[150px]">
        <div className="container-footer">
          <div className="footer-content flex justify-between items-start px-16 pt-[100px]">
            <div className="left">
              <div className="title">
                <h1 className="text-2xl lg:text-[38px] font-generalSb">
                  Let’s work with us!
                </h1>
                <h2 className="font-generalLi lg:max-w-[317px] mt-4 opacity-70 text-sm max-w-[210px]">
                  You can call or send us a message if you want to work with us!
                </h2>
              </div>
              <div className="form mt-[83px]">
                <form action="">
                  <div className="">
                    <div className="input-1 flex gap-x-6 items-start my-4">
                      <div className="id">
                        <h2 className="text-xl font-generalMd">01</h2>
                      </div>
                      <div className="input-field">
                        <div className="title">
                          <h2 className="text-xl font-generalMd">
                            What's your name?
                          </h2>
                        </div>
                        <div className="input-field mt-10">
                          <input
                            type="text"
                            placeholder="Firstname"
                            className="bg-transparent border-b mr-4 pb-4 "
                          />
                          <input
                            type="text"
                            placeholder="Lastname"
                            className="bg-transparent border-b pb-4 "
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {footerForm.map((data) => (
                    <div>
                      <div className="input-form flex gap-x-6 items-start mt-10 my-4">
                        <div className="id">
                          <h2 className="text-xl font-generalMd">0{data.id}</h2>
                        </div>
                        <div className="form-field w-full">
                          <div className="title">
                            <label
                              htmlFor=""
                              className="text-xl font-generalMd"
                            >
                              {data.title}
                            </label>
                          </div>
                          <div className="input-field mt-8 w-full ">
                            {data.formField.map((inputContent) => (
                              <input
                                type="text"
                                placeholder={inputContent.placeholder}
                                className="mr-4 bg-transparent border-b pb-4 w-full outline-0"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <Button
                    className={"bg-white text-black w-full mt-20 ml-[20px]"}
                  >
                    Tes
                  </Button>
                </form>
              </div>
            </div>
            <div className="right">
              <div className="logo flex items-center gap-x-8">
                <img
                  src={logoContact}
                  alt=""
                  className="bg-white rounded-full"
                />
                <h2 className="font-generalMd text-[42px]">PT MASRUR</h2>
              </div>
              <div className="location mt-24 max-w-[522px]">
                <h2 className="text-lg">Head Office </h2>
                <p className="text-[#717786]">
                  Jln.Sekumpul Mahabbah 3 No.50 D, MARTAPURA,
                  KAB.BANJAR,KALIMANTAN SELATAN 70619
                </p>
              </div>
              <h2 className="mt-24">Marketing Executive</h2>
              <div className="phone mt-2">
                <h2>Phone:</h2>
                <p className="text-[#717786]">
                  +62 813 4629 9438 (Mr. Jangkung Wibowo){" "}
                </p>
                <p className="text-[#717786]">
                  +62 812 1323 3959 (Mr. Didi Supardi)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
