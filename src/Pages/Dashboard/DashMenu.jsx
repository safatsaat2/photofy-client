
const DashMenu = () => {
    const isAdmin = false;
    const isInstructor = false;
    return (
        <div className="w-1/4 h-screen bg-slate-700 text-white">
            {
                isAdmin ? <>
                <ul>
                    <li className="pt-10 px-10">Manage Classes</li>
                    <li className="pt-10 px-10">Manage Users</li>
                </ul>
                </>
                :
                isInstructor ? <>
                <ul>
                    <li className="pt-10 px-10">Add a Class</li>
                    <li className="pt-10 px-10">My Classes</li>
                </ul>
                </>
                : <>
                <ul>
                    <li className="pt-10 px-10">My Selected Classes</li>
                    <li className="pt-10 px-10">My Enrolled Classes</li>
                    <li className="pt-10 px-10">Payment History</li>
                </ul>
                
                </>
            }
        </div>
    );
};

export default DashMenu;