import { useContext } from "react";
import { GlobalContext } from "../Global/GlobalContext";

export const useGlobalState = () => {
    return useContext(GlobalContext)
}