"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import LinearChart from "../../components/LinearChart";
import CardDataStats from "../../components/CardDataStats";
import DonutChart from "../../components/DonutChart";
import { USER_ROLE } from "../../consts/role";
import { Users } from "../../types/user";

const DashboardPage = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col gap-7.5">
        <div className="col-span-12 rounded-sm border border-gray bg-white px-5 pt-7.5 sm:px-7.5 shadow-default">
          <div>
            <h3 className="text-title-sm2 font-bold text-black mb-5">
              Visitors Analytics
            </h3>
          </div>
          <div className="mb-2">
            <div className="-ml-5">
              <LinearChart />
            </div>
          </div>
        </div>

        <div className="col-span-12 flex flex-col gap-3 shadow-default">
          <div className="text-title-lg font-bold">Website Metrics</div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-gray border bg-white">
            <CardDataStats
              title="Unique Visitors"
              total="$18.6K"
              rate="18%"
              levelUp
            />
            <CardDataStats
              title="Total Pageviews"
              total="$55.9K"
              rate="25%"
              levelUp
            />
            <CardDataStats title="Bounce Rate" total="54%" rate="7%" levelUp />
            <CardDataStats
              title="Average Visit Duration"
              total="2m 56s"
              rate="12%"
              levelUp
            />
            <CardDataStats
              title="Monthly Recurring Revenue"
              total="1,110 €"
              rate="18%"
              levelUp
            />
            <CardDataStats
              title="Churn Rate in the last 28 days"
              total="-23%"
              rate="25%"
              levelUp
            />
          </div>
        </div>

        <div className="col-span-12 flex flex-col gap-3 shadow-default">
          <div className="text-title-lg font-bold">User Engagement Metrics</div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-gray border bg-lightgray">
            <CardDataStats
              title="Unique Visitors"
              total="$18.6K"
              rate="18%"
              levelUp
            />
            <CardDataStats
              title="Total Pageviews"
              total="$55.9K"
              rate="25%"
              levelUp
            />
            <CardDataStats title="Bounce Rate" total="54%" rate="7%" levelUp />
            <CardDataStats
              title="Average Visit Duration"
              total="2m 56s"
              rate="12%"
              levelUp
            />
            <CardDataStats
              title="Monthly Recurring Revenue"
              total="1,110 €"
              rate="18%"
              levelUp
            />
            <CardDataStats
              title="Churn Rate in the last 28 days"
              total="-23%"
              rate="25%"
              levelUp
            />
          </div>
        </div>

        <div className="col-span-12 rounded-sm border border-gray bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
          <h5 className="mb-3 text-title-sm2 font-bold text-primary dark:text-white">
            Visitors Analytics
          </h5>
          <div className="mb-2">
            <div id="chartThree" className="mx-auto flex justify-center">
              <DonutChart />
            </div>
          </div>
        </div>

        <div className="col-span-12">
          <div className="rounded-sm border border-gray bg-white shadow-default">
            <div className="flex justify-between px-9 py-6.5">
              <h4 className="text-title-sm2 font-bold text-primary">
                Newest Users
              </h4>
            </div>

            <div className="flex flex-col">
              <div className="overflow-x-auto">
                <div className="block min-w-full">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-secondary text-left">
                      <thead className="border-y border-gray text-base">
                        <tr>
                          <th scope="col" className="px-7.5 py-4.5 font-medium">
                            Name
                          </th>
                          <th scope="col" className="px-7.5 py-4.5 font-medium">
                            Email
                          </th>
                          <th scope="col" className="px-7.5 py-4.5 font-medium">
                            Subscription Title
                          </th>
                          <th scope="col" className="px-7.5 py-4.5 font-medium">
                            Subscription Start
                          </th>
                          <th scope="col" className="px-7.5 py-4.5 font-medium">
                            Subscription End
                          </th>
                          <th
                            scope="col"
                            className="px-7.5 py-4.5 font-medium"
                          ></th>
                        </tr>
                      </thead>
                      <tbody>
                        {Users.filter(
                          (user) => user.role === USER_ROLE.NORMAL
                        ).map((user) => (
                          <tr
                            key={user.id}
                            className="border-b border-gray text-sm"
                          >
                            <td className="whitespace-nowrap px-7.5 py-8 font-medium">
                              {user.name}
                            </td>
                            <td className="whitespace-nowrap px-7.5 py-8 font-medium">
                              {user.email}
                            </td>
                            <td className="whitespace-nowrap px-7.5 py-8 font-medium">
                              {user.subscription}
                            </td>
                            <td className="whitespace-nowrap px-7.5 py-8 font-medium">
                              {user.start}
                            </td>
                            <td className="whitespace-nowrap px-7.5 py-8 font-medium">
                              {user.end}
                            </td>
                            <td className="px-7.5 py-8 flex justify-end">
                              <Link href={`/user/${user.id}`}>
                                <Image
                                  width={18}
                                  height={18}
                                  src={"/images/file-pen.svg"}
                                  alt="File Pen"
                                />
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center p-5.5">
              <button
                className="rounded-full border border-primary2 py-2 px-6 text-center text-base font-medium text-primary2 hover:bg-opacity-90"
                onClick={() => router.push("/user")}
              >
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
