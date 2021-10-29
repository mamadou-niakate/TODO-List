import localStorageService from "./localStorage.service";

export const getFilterService = {
    filterDataByStatus: (status) => {
        return localStorageService.getTasks().filter(item => item.status === status);
    }
}