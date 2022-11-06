import {Label } from "../ContactForm/ContactForm.styled";
import { Container, InputName } from "./Filter.styled";
import { useDispatch, useSelector } from "react-redux";
import {setFilter} from '../../Redux/filterSlice'

const Filter = () => {
    const dispatch = useDispatch();
    const value = useSelector(state => state.filter.value);
    

    const handleFilter = e => {
        dispatch(setFilter(e.target.value));
      };

     return (
    <Container>
        <Label>
            Find contacts by name
            <InputName type="text" value={value} onChange={handleFilter} />
        </Label>
    </Container>
)}


export default Filter;