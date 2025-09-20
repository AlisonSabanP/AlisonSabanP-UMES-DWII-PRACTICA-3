import React from "react";

interface FiltersProps {
    filter: "all" | "completed" | "pending";
    setFilter: React.Dispatch<React.SetStateAction<"all" | "completed" | "pending">>;
}

const Filters: React.FC<FiltersProps> = ({ filter, setFilter }) => {
    return (
        <div className="filters">
            <button
                onClick={() => setFilter("all")}
                className={filter === "all" ? "active" : ""}
            >
                Todas
            </button>
            <button
                onClick={() => setFilter("completed")}
                className={filter === "completed" ? "active" : ""}
            >
                ¡Ya está hecho!
            </button>
            <button
                onClick={() => setFilter("pending")}
                className={filter === "pending" ? "active" : ""}
            >
                ¡Por hacer!
            </button>
        </div>
    );
};

export default Filters;
