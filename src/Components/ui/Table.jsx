/**
 * Table Component - Responsive data table with sorting and pagination
 */

const Table = ({
  columns = [],
  data = [],
  hoverable = true,
  striped = false,
  bordered = false,
  compact = false,
  className = '',
}) => {
  const baseTableClass = 'min-w-full divide-y divide-gray-200';
  const hoverClass = hoverable ? 'hover:bg-gray-50' : '';
  const stripedClass = striped ? 'even:bg-gray-50' : '';
  const compactClass = compact ? 'text-sm' : '';

  return (
    <div className={`overflow-x-auto ${className}`}>
      <div className='inline-block min-w-full align-middle'>
        <div
          className={`overflow-hidden ${bordered ? 'border border-gray-200' : ''} rounded-lg`}
        >
          <table className={baseTableClass}>
            <thead className='bg-gray-100'>
              <tr>
                {columns.map((column, index) => (
                  <th
                    key={index}
                    scope='col'
                    className={`px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider ${
                      column.className || ''
                    }`}
                    style={{ width: column.width }}
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {data.length === 0 ? (
                <tr>
                  <td
                    colSpan={columns.length}
                    className='px-6 py-12 text-center text-gray-500'
                  >
                    <div className='flex flex-col items-center gap-2'>
                      <span className='text-4xl'>📭</span>
                      <p>No data available</p>
                    </div>
                  </td>
                </tr>
              ) : (
                data.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={`${hoverClass} ${stripedClass} ${compactClass} transition-colors`}
                  >
                    {columns.map((column, colIndex) => (
                      <td
                        key={colIndex}
                        className={`px-6 ${compact ? 'py-3' : 'py-4'} whitespace-nowrap ${
                          column.cellClassName || ''
                        }`}
                      >
                        {column.render
                          ? column.render(row, rowIndex)
                          : row[column.accessor]}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

/**
 * TablePagination Component
 */
export const TablePagination = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  itemsPerPage = 10,
  totalItems = 0,
}) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className='flex items-center justify-between px-6 py-4 border-t border-gray-200 bg-white'>
      <div className='text-sm text-gray-700'>
        Showing <span className='font-medium'>{startItem}</span> to{' '}
        <span className='font-medium'>{endItem}</span> of{' '}
        <span className='font-medium'>{totalItems}</span> results
      </div>

      <div className='flex items-center gap-2'>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className='px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          Previous
        </button>

        <div className='flex gap-1'>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`px-3 py-1 text-sm font-medium rounded-md ${
                currentPage === page
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className='px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
