# Notes

Some notes when implementing this:

- You can sunscribe to state changes in a similar fashion to effects in RecoilJS (useful for persistance of favourited beers in LocalStorage or SessionStorage). Unlike RecoilJS this is limited to implementation at a component level.
- Setting values to udpate the "store" is done via `useDispatch` and an action passed.
- Typescript support is not so well documentated
- Documentation is a little tricky to find what you need, often Googling and finding references to the correct part of documentation from a similar SO question.
- API requests need to be made using the `createApi` vs `createSlice` initiator. Ther syntax for such is a little tricky to understand.
- `createSlice` is very similar to `atom()` in RecoilJS.
- Derived states is not possible within a slice (as far as I could tell, something I love about RecoilJS)
- Remembering include the reducers into the Global store caught me out a few times.
- "Middleware" confuses me -- the syntax isn't particularly readable.

### General thoughts

- Not as readable as Context or RecoilJS IMO
- Takes a minimum of `useDispatch`, `someAction` import and `useSelector` to read and write values.
- Parsed bundle size of redux is 42kb.
