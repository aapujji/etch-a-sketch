const Cell = () => {
    const size = (gridWidth, cells) => {
        return Math.round((gridWidth / cells) * 100) / 100;
    }

    return {
        size,
    }
}

export default Cell;