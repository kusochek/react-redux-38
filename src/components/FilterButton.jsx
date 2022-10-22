import { Button } from "@mui/material";

export default function FilterButton({ filter, changeFilters, currentFilter }) {
    function handleActionChangeFilter() {
        changeFilters(filter);
    };

    return (
        <Button
            onClick={handleActionChangeFilter}
            variant={currentFilter === filter ? "contained" : "text"}
        >
            {filter}
        </Button>
    )
}