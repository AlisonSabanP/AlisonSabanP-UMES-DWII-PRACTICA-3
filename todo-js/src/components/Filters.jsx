import React from "react";

const Filters = ({ filter, setFilter }) => {
    return (
        <div className="filters">
            <button onClick={() => setFilter("all")} className={filter === "all" ? "active" : ""}>Todas</button>
            <button onClick={() => setFilter("completed")} className={filter === "completed" ? "active" : ""}>¡Ya está hecho!</button>
            <button onClick={() => setFilter("pending")} className={filter === "pending" ? "active" : ""}>¡Por hacer!</button>
        </div>
    );
};

export default Filters;
