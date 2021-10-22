export const getFilterService = {
    filterDataByStatus: (data,status) => {
        return data.filter(item => item.status === status);
    }
}