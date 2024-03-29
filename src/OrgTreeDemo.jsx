import React from "react";

import OrgTree from "react-org-tree";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const data = {
  id: 1,
  name: "Max Rehkoph",
  position: "CEO",
  img: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1221",
  color: "bg-[#e6d5ff73]",
  children: [
    {
      id: 2,
      name: "Tim Cook",
      position: "Manager",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
      color: "bg-red-100",
      children: [],
    },
    {
      id: 3,
      name: "Akira Musk",
      position: "Manager",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      color: "bg-red-100",

      children: [
        {
          id: 4,
          name: "Jems Gorge",
          position: "Foreman",
          img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
          color: "bg-blue-200",

          children: [
            {
              id: 4,
              name: "Jems Gorge",
              position: "Foreman",
              img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
              color: "bg-blue-200",

              children: [
                {
                  id: 2,
                  name: "Tim Cook",
                  position: "Manager",
                  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
                  color: "bg-red-100",
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: 5,
          name: "Zoe Tanzo",
          position: "Foreman",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6zq21NVsOxQs4PL4rJU30aiCXEkVrwB-Y19RYowqhUGklgM3SNfj6e-L1UU3mfuyByM&usqp=CAU",
          color: "bg-blue-200",

          children: [
            {
              id: 4,
              name: "Jems Gorge",
              position: "Foreman",
              img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
              color: "bg-blue-200",

              children: [
                {
                  id: 2,
                  name: "Tim Cook",
                  position: "Manager",
                  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
                  color: "bg-red-100",
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const OrgTreeDemo = () => {
  return (
    <div style={{ width: "600px", height: "600px" }}>
      <TransformWrapper
        initialScale={1}
        initialPositionX={10}
        initialPositionY={10}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment>
            <div className="tools">
              <button
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => zoomIn()}
              >
                +
              </button>
              <button
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => zoomOut()}
              >
                -
              </button>
              <button
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => resetTransform()}
              >
                x
              </button>
            </div>
            <TransformComponent>
              <OrgTree
                data={data}
                horizontal={false}
                collapsable={true}
                labelClassName={""}
                expandAll={true}
                renderContent={(data) => {
                  return (
                    <div
                      className={`flex items-start px-2 py-3 ${data.color} px-4`}
                    >
                      {data.img && (
                        <img
                          className="w-10 h-10 rounded-full object-cover mr-4 shadow"
                          src={data.img}
                          alt="avatar"
                        />
                      )}
                      <div className="text-left">
                        <p className="text-xs">{data.name}</p>
                        <p className="text-gray-500 text-[10px]">
                          {data.position}
                        </p>
                      </div>
                    </div>
                  );
                }}
                onClick={(e, data) => {
                  //todo
                }}
              ></OrgTree>
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
    </div>
  );
};

export default OrgTreeDemo;
