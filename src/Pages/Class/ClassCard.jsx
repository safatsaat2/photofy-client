

const ClassCard = ({classes}) => {
    console.log(classes)
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className="h-[400px] w-full object-cover" src={classes.image} alt="Picture" /></figure>
            <div className="card-body bg-blue-50">
                <h2 className="card-title text-2xl">{classes.name}</h2>
                <div className="flex justify-end mt-5 items-end">
                <p className="font-semibold text-lg">Fee: ${classes.price}</p>
                <p className="font-semibold text-lg">Students: {classes.student}</p>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;