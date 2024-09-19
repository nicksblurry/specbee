import StoryPage from "../components/StoryPage";
import { AppProvider } from "../context/AppContext";
import { FilterContextProvider } from "../context/FilterContext";
import { PaginationProvider } from "../context/PaginationContext";

export default function Home() {
  return (
    <AppProvider>
      <FilterContextProvider>
        <PaginationProvider>
          <StoryPage />
        </PaginationProvider>
      </FilterContextProvider>
    </AppProvider>
  );
}
