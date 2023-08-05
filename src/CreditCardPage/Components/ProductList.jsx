import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getCreditCards } from "../../Redux/CardPageReducer/action";
import { useSearchParams } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import { SkeletonCard } from "./SkeletonCard";

export const ProductList = () => {

    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const cards = useSelector((store) => store.creditCardReducer.cards);
    const isLoading=useSelector((store)=>store.creditCardReducer.isLoading)

    let obj = {
        params: {
            bankName: searchParams.getAll("bankName"),
            cardType: searchParams.getAll("cardType"),
            _sort: searchParams.get("order") && "cardPrice",
            _order: searchParams.get("order"),
        }
    }

    useEffect(() => {
        dispatch(getCreditCards(obj))
    }, [searchParams]);

    return <div style={{ justifyContent: "center" }}>
        {cards?.map((el, i) => {
            return(isLoading?<SkeletonCard/>:<ProductCard key={el.id} data={el} />)
        })}
    </div>
}