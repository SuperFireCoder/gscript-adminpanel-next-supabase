import React from "react";
import Image from "next/image";
import Link from "next/link";

import LinearChart from "../../components/LinearChart";
import CardDataStats from "../../components/CardDataStats";
import DonutChart from "../../components/DonutChart";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { supabase as client_supabase } from "../../lib/supabase";
import { User } from "../../types/user";

const DashboardPage = async () => {
  // Auth user
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Get users data
  const { data, error } = await client_supabase
    .from("users")
    .select("id, email, created_at, subscription(name, role, type, start, end)")
    .eq("subscription.role", "user")
    .order("created_at", { ascending: false })
    .limit(4);
  const users_data =
    data && !error
      ? data
          .filter((user: any) => user.subscription.length)
          .map((user: any) => ({
            id: user.id,
            email: user.email,
            created_at: user.created_at,
            ...user.subscription[0],
          }))
      : [];

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
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 border-gray border bg-white">
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
            <CardDataStats
              title="Bounce Rate"
              total="54%"
              rate="7%"
              levelDown
            />
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
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 border-gray border bg-lightgray">
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
            <CardDataStats
              title="Bounce Rate"
              total="54%"
              rate="7%"
              levelDown
            />
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
            <CardDataStats
              title="Documents shared in the last 24h"
              total="16"
              rate="7%"
              levelDown
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
                          <th
                            scope="col"
                            className="px-4 xl:px-7.5 py-4.5 font-medium"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-4 xl:px-7.5 py-4.5 font-medium"
                          >
                            Email
                          </th>
                          <th
                            scope="col"
                            className="px-4 xl:px-7.5 py-4.5 font-medium"
                          >
                            Subscription Title
                          </th>
                          <th
                            scope="col"
                            className="px-4 xl:px-7.5 py-4.5 font-medium"
                          >
                            Subscription Start
                          </th>
                          <th
                            scope="col"
                            className="px-4 xl:px-7.5 py-4.5 font-medium"
                          >
                            Subscription End
                          </th>
                          <th
                            scope="col"
                            className="px-4 l:px-7.5 py-4.5 font-medium"
                          ></th>
                        </tr>
                      </thead>
                      <tbody>
                        {users_data.map((user: User) => (
                          <tr
                            key={user.id}
                            className="border-b border-gray text-sm"
                          >
                            <td className="px-4 xl:px-7.5 py-8 font-medium max-w-70 whitespace-normal">
                              {user.name}
                            </td>
                            <td className="px-4 xl:px-7.5 py-8 font-medium whitespace-normal">
                              {user.email}
                            </td>
                            <td className="px-4 xl:px-7.5 py-8 font-medium">
                              {user.type}
                            </td>
                            <td className="px-4 xl:px-7.5 py-8 font-medium">
                              {user.start?.toString()}
                            </td>
                            <td className="px-4 xl:px-7.5 py-8 font-medium">
                              {user.end?.toString()}
                            </td>
                            <td className="px-4 xl:px-7.5 py-8 min-w-20">
                              <div>
                                <Link href={`/user/${user.id}`}>
                                  <Image
                                    width={18}
                                    height={18}
                                    src={"/images/file-pen.svg"}
                                    alt="File Pen"
                                  />
                                </Link>
                              </div>
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
              <Link href={"/user"}>
                <button className="rounded-full border border-primary2 py-2 px-6 text-center text-base font-medium text-primary2 hover:bg-opacity-90">
                  View All
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
