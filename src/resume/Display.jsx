const Display = ({ data }) => {
    return (
        <>
            <div>{data.message}</div>
            <div>{data.personal.firstName}</div>
            <div>{data.personal.lastName}</div>
        </>
    );
}

export default Display;