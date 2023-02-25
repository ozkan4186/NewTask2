
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import Data from "../helpers/data1.js";



const Card = () => {
  return (
    <div className=" flex flex-wrap mt-10 gap-10 ">
      <DragDropContext>
        <Droppable droppableId="card">
          {(provided) => (
            <div
              className="  card flex flex-wrap  flex-auto  justify-center gap-8 w-32  mx-auto  "
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {Data.map((item, key,id,  index) => {
                return (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <div
                        className="flex flex-wrap"
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
