import { Paper, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { FILTER_ALL, FILTER_DONE, FILTER_NOT_DONE } from "../constants/filters";
import { changeFilter } from "../store/filter/reducer";
import FilterButton from "./FilterButton";


export default function Filters() {
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const FILTERS_NAME = [FILTER_ALL, FILTER_DONE, FILTER_NOT_DONE];

    function handleChangeFilter(filter) {
        dispatch(changeFilter(filter));
    };

    return (
        <Paper>
             <Stack spacing={2} direction="row">
                {FILTERS_NAME.map((item, i) => (
                    <FilterButton 
                        key={i}
                        filter={item}
                        changeFilters={handleChangeFilter}
                        currentFilter={filter}
                    />
                ))}
            </Stack>
        </Paper>
    )
}