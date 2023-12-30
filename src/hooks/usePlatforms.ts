import useData from "./useData";

export interface Platform{
    id:number,
    name:string,
    slug:string,
}

const usePLatforms = () => useData<Platform>("platforms/lists/parents");

export default usePLatforms;