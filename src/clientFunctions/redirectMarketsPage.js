export const redirectMarketsPage = (abrev,ranking) => {
    window.location.href = `/markets?abrev=${abrev}&ranking=${ranking}`;
};