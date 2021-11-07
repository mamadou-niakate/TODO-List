import localStorageService from "./localStorage.service";

export const getFilterService = {
    filterDataByStatus: (status) => {
        return localStorageService.getTasks().filter(item => item.status === status);
    },
    filterDataByTasksGroupTitle: (title) => {
        return localStorageService.getTasks().filter(item => item.title === title);
    },
}