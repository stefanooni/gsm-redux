import { useRouter } from "next/router";
import {
  ChangeEvent,
  forwardRef,
  HTMLAttributes,
  useEffect,
  useRef,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDebouncedTerm, setTerm } from "../../../states/search.state";
import { RootState } from "../../../states/_global";
import { Timeout } from "../../../types/global.types";

const debounceTime = 300;

export const Search = forwardRef<
  HTMLInputElement,
  HTMLAttributes<HTMLInputElement>
>((props, ref) => {
  const searchTerm = useSelector(
    (state: RootState) => state.search.preDebounceValue
  );
  const router = useRouter();
  const dispatch = useDispatch();
  const debouncer = useRef<Timeout | null>(null);

  const onTermUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.currentTarget.value;
    if (debouncer.current) {
      clearTimeout(debouncer.current);
    }
    dispatch(setTerm(term));
    debouncer.current = setTimeout(() => {
      dispatch(setDebouncedTerm(term));
      router.push({ query: { s: term } });
    }, debounceTime);
  };

  useEffect(() => {
    const { s } = router.query;
    dispatch(setTerm(s ?? ""));
    dispatch(setDebouncedTerm(s ?? ""));
  }, [dispatch, router]);

  return (
    <input
      type="search"
      value={searchTerm}
      ref={ref}
      {...props}
      onChange={onTermUpdate}
    />
  );
});

Search.displayName = "Search";
