
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { useState } from "react";
import Data from "../helpers/data1.js";



const Card = () => {
  const [characters, updateCharacters] = useState(Data);
  function handleOnDragEnd(result) {
     if (!result.destination) return;
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);

  }
  return (
    <div className=" flex flex-wrap mt-10 gap-10  ">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="card">
          {(provided) => (
            <div
              className="  card flex flex-wrap  flex-auto  justify-center gap-6   mx-auto  "
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                maxWidth:"1200px"
              }}
            >
              {characters.map((item, key, id, index) => {
                return (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <div
                        className="flex flex-wrap  "
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                          <a href="#!">
                            <img
                              className="rounded-t-lg"
                              src={item.image}
                              alt=""
                            />
                          </a>
                          <div className="p-4">
                            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                              {item.title}
                            </h5>
                            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                              {item.price}
                            </p>
                            <div className=" " >
                              <button
                                type="button"
                                className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase 
leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out 
hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,
202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba
(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-
[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                              >
                                Detay
                              </button>

                              <div className="flex justify-end cursor-pointer  ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="25"
                                  height="32"
                                  viewBox="0 0 2048 2048"
                                  className="mr-3 -mt-8 "
                                >
                                  <path
                                    fill="#89ca10"
                                    d="M1930 220q26 45 47 86t38 83t24 87t9 100q0 79-20 152t-58 138t-91 117t-117 90t-137 
58t-153 21q-23 0-46-2t-47-6l-806 806q-48 48-109 73t-129 25q-69 
0-130-26t-106-72t-72-107t-27-130q0-67 25-128t73-110l806-806q-4-23-6-46t-2-47q0-79 
20-152t58-138t91-117t117-90t137-58t153-21q54 0 99 8t88 25t83 37t86 48l-394 394l102 
102l394-394zm-458 804q93 0 174-35t142-96t96-142t36-175q0-73-24-141l-360 
359l-282-282l359-360q-68-24-141-24q-93 0-174 35t-142 96t-96 142t-36 175q0 35 6 68t14 
66l-855 856q-29 29-45 67t-16 80q0 42 16 80t45 66t66 44t80 17q42 0 80-16t67-45l856-855q33 8 
66 14t68 6z"
                                  />
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="25"
                                  height="32"
                                  viewBox="0 0 16 16"
                                  className="-mt-8"
                                >
                                  <path
                                    fill="#c50a0a"
                                    d="M7 3h2a1 1 0 0 0-2 0ZM6 3a2 2 0 1 1 4 0h4a.5.5 0 0 1 0 1h-.564l-1.205 8.838A2.5 2.5 0
0 1 9.754 15H6.246a2.5 2.5 0 0 1-2.477-2.162L2.564 4H2a.5.5 0 0 1 0-1h4Zm1 3.5a.5.5 0 0 
0-1 0v5a.5.5 0 0 0 1 0v-5ZM9.5 6a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5Z"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Card;
