"use client";
import Image from "next/image";
import React from "react";
import { FaPencil } from "react-icons/fa6";
import DeleteBtn from "./DeleteBtn";
import Link from "next/link";

interface Types {
  name: string;
  id: string;
  image: string;
  createdAt: Date;
  price: number;
}

export default function TableBody({ data }: { data: Types[] }) {
  return (
    <tbody>
      {data.map((room, index) => (
        <tr key={room.id}>
          <th>{index + 1}</th>
          <td>
            <div className="md:w-full w-40 aspect-video overflow-hidden rounded-md">
              <Image
                src={room.image}
                alt={room.image}
                width={200}
                height={200}
                unoptimized
                className="object-cover object-center skeleton"
              />
            </div>
          </td>
          <td>{room.name}</td>
          <td>
            <span className="font-semibold">
              Rp{room.price.toLocaleString("id-ID")}
            </span>
          </td>
          <td>{room.createdAt.toLocaleDateString()}</td>
          <td>
            <div className="w-full h-full flex items-center justify-center gap-3 ">
              <DeleteBtn id={room.id} name={room.name} />
              <Link
                href={"/admin/room/edit?id=" + room.id}
                className="btn btn-sm btn-warning text-white"
              >
                <FaPencil size={20} />
              </Link>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
