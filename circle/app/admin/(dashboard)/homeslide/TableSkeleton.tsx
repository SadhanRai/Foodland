const TableSkeleton = () => {
    return (
        <>
            {Array.from({ length: 5 }).map((_, index) => (
                <tr key={index}>
                    <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-gray-200 rounded-lg animate-pulse" />
                            <div className="space-y-2">
                                <div className="h-4 w-40 bg-gray-200 rounded animate-pulse" />
                                <div className="h-3 w-28 bg-gray-200 rounded animate-pulse" />
                            </div>
                        </div>
                    </td>

                    <td className="px-6 py-4">
                        <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                    </td>

                    <td className="px-6 py-4">
                        <div className="h-6 w-11 bg-gray-200 rounded-full animate-pulse" />
                    </td>

                    <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                            <div className="w-7 h-7 bg-gray-200 rounded-full animate-pulse" />
                            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                        </div>
                    </td>

                    <td className="px-6 py-4">
                        <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                    </td>

                    <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                            <div className="w-8 h-8 bg-gray-200 rounded-lg animate-pulse" />
                            <div className="w-8 h-8 bg-gray-200 rounded-lg animate-pulse" />
                            <div className="w-8 h-8 bg-gray-200 rounded-lg animate-pulse" />
                        </div>
                    </td>
                </tr>
            ))}
        </>
    );
};

export default TableSkeleton;