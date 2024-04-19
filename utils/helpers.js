module.exports = {
    format_date: (date) => {
        const d = new Date(date);
        const currentdate =`${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
        const hrs = d.getHours().toString().padStart(2, '0');
        const mins = d.getMinutes().toString().padStart(2,'0');
        const currentTime = `${hrs}:${mins}`;
        return `${currentdate} at ${currentTime}`;
    },
};