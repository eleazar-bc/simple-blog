import React, { useState, useEffect } from 'react';
import './Blogs.css';
import { useSelector } from 'react-redux';
import Pagination from 'react-js-pagination';
import BlogItem from '../blogItem/BlogItem';

export default function Blogs() {
    const pageLimit = 5;
    const allBlogs = useSelector(state => state.blogs.filtered);
    const [sortedBlogs, setSortedBlogs] = useState(allBlogs);
    const [sortType, setSortType] = useState('');
    const [activePage, setActivePage] = useState(1);
    const lastBlogIndex = activePage * pageLimit;
    const firstBlogIndex = lastBlogIndex - pageLimit;

    useEffect(() => {
        setActivePage(1);

        const sortBlogs = () => {
            setSortedBlogs(
                allBlogs &&
                    [...allBlogs].sort((a, b) => {
                        if (a[sortType.type] < b[sortType.type]) {
                            return sortType.direction === 'ascending' ? -1 : 1;
                        }

                        if (a[sortType.type] > b[sortType.type]) {
                            return sortType.direction === 'ascending' ? 1 : -1;
                        }
                        return 0;
                    })
            );
        };

        sortBlogs();
    }, [sortType, allBlogs]);

    const currentBlogs = sortedBlogs && sortedBlogs.slice(firstBlogIndex, lastBlogIndex);

    const handleSort = event => {
        const type = event.target.value.split('-')[0];
        const direction = event.target.value.split('-')[1];

        setSortType({ type, direction });
    };

    const handlePageChange = pageNumber => {
        setActivePage(pageNumber);
    };

    return (
        <div className='blogs-container'>
            <div className='filters-container'>
                <div className='sort-buttons'>
                    Sort by:
                    <select className='sort-type-select' onChange={handleSort}>
                        <option value='' disabled selected>
                            Select
                        </option>
                        <option value='title-ascending'>Title</option>
                        <option value='date-descending'>Date (newest)</option>
                        <option value='date-ascending'>Date (oldest)</option>
                    </select>
                </div>
            </div>

            <Pagination
                hideNavigation
                hideFirstLastPages
                activePage={activePage}
                itemsCountPerPage={pageLimit}
                totalItemsCount={allBlogs && allBlogs.length}
                onChange={handlePageChange}
            />

            {currentBlogs &&
                currentBlogs.map(blogItem => {
                    return <BlogItem key={blogItem.id} post={blogItem} />;
                })}
        </div>
    );
}
