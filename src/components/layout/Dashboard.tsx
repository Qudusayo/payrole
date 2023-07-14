import React from "react";
import {
  IconLogout,
  IconSmartHome,
  IconCreditCard,
  IconFileFilled,
  IconPencilMinus,
  IconReportMoney,
  IconReplaceFilled,
  IconSettingsFilled,
  IconShieldCheckFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function DashboardLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const { route } = useRouter();

  return (
    <div>
      <div className="flex">
        <div className="w-64 bg-white h-screen border-r border-gray-300 flex flex-col justify-between p-6">
          <div>
            <div className="w-full m-auto pb-5">
              <Image src="/logo.svg" alt="logo" width={120} height={120} />
            </div>
            <ul>
              <li>
                <Navlink
                  title="Home"
                  href="/dashboard"
                  icon={IconSmartHome}
                  active={route === "/dashboard"}
                />
              </li>
              <li>
                <Navlink
                  title="Contracts"
                  href="/contracts"
                  icon={IconPencilMinus}
                  active={route === "/contracts"}
                />
              </li>
              <li>
                <Navlink
                  title="Documents"
                  href="/documents"
                  icon={IconFileFilled}
                  active={route === "/documents"}
                />
              </li>
              <li>
                <Navlink
                  title="Invoices"
                  href="/invoices"
                  icon={IconReportMoney}
                  active={route === "/invoices"}
                />
              </li>
              <li>
                <Navlink
                  title="Transactions"
                  href="/transactions"
                  icon={IconReplaceFilled}
                  active={route === "/transactions"}
                />
              </li>
              <li>
                <Navlink
                  title="Insurance"
                  href="/insurance"
                  icon={IconShieldCheckFilled}
                  active={route === "/insurance"}
                />
              </li>
              <li>
                <Navlink
                  title="Cards"
                  href="/cards"
                  icon={IconCreditCard}
                  active={route === "/cards"}
                />
              </li>
            </ul>
          </div>
          <div>
            <Navlink
              title="Settings"
              href="/settings"
              icon={IconSettingsFilled}
              active={route === "/settings"}
            />
          </div>
        </div>
        <div className="bg-white h-screen w-full">
          <div className="w-full flex justify-between items-center p-6 py-4">
            <h1 className="text-2xl font-medium">{title}</h1>

            <div className="flex items-center gap-2 ml-auto">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <Image
                      src="https://avatars.githubusercontent.com/u/51055890?v=4"
                      width={"40"}
                      height={"40"}
                      alt="avatar"
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-lg w-52"
                >
                  <li>
                    <Link href={"/settings"} className="p-4 py-2 text-gray-400">
                      <IconSettingsFilled size={24} className="" />
                      <span>Settings</span>
                    </Link>
                  </li>
                  <li className="mt-1">
                    <button className="p-4 py-2 text-red-500 hover:text-red-500 focus:text-red-500">
                      <IconLogout size={24} className="" />
                      <span>Logout</span>
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="text font-normal">John Doe</h1>
                <p className="text-sm text-gray-500">
                  <span>Freelancer</span>
                </p>
              </div>
            </div>

            {/* <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://avatars.githubusercontent.com/u/51055890?v=4" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div> */}
          </div>

          <>{children}</>
        </div>
      </div>
    </div>
  );
}

function Navlink({
  href,
  title,
  active,
  icon: IconComponent,
}: {
  href: string;
  title: string;
  active: boolean;
  icon: typeof IconSmartHome;
}) {
  return (
    <Link
      href={href}
      className={[
        "flex items-center gap-2 p-3 w-full m-auto mt-4 rounded-xl transition-all duration-200 ease-in-out border",
        active
          ? "bg-gray-50 border-gray-200 hover:bg-gray-100"
          : "hover:bg-gray-50 border-transparent",
      ].join(" ")}
    >
      <IconComponent
        size={24}
        className={active ? "text-primary" : "text-gray-400"}
      />
      <span className={active ? "text-primary" : "text-gray-400"}>{title}</span>
    </Link>
  );
}
