import React, { useState, useEffect } from 'react';
import './blogsList.css';
import BlogItem from '../blogItem/BlogItem';
import Pagination from 'react-js-pagination';

export default function BlogsList(props) {
    const pageLimit = 2;
    const [allBlogs, setAllBlogs] = useState([]);
    const [sortType, setSort] = useState('date-descending');

    const [activePage, setActivePage] = useState(1);
    const lastBlogIndex = activePage * pageLimit;
    const firstBlogIndex = lastBlogIndex - pageLimit;

    const pagedBlogs = allBlogs && allBlogs.slice(firstBlogIndex, lastBlogIndex);

    useEffect(() => {
        setAllBlogs(props.blogs);
    }, [props.blogs]);

    const handleSort = event => {
        setSort(event.target.value);
        const type = event.target.value.split('-')[0];
        const direction = event.target.value.split('-')[1];

        props.sort({ type, direction });
    };

    const handlePageChange = pageNumber => {
        setActivePage(pageNumber);
    };

    return (
        <div className='blogs-container'>
            <div className='filters-container'>
                <div className='sort-buttons'>
                    Sort by:
                    <select
                        value={sortType}
                        className='sort-type-select'
                        onChange={handleSort}
                    >
                        <option value='title-ascending'>Title</option>
                        <option value='date-descending'>Date (newest)</option>
                        <option value='date-ascending'>Date (oldest)</option>
                    </select>
                </div>

                <Pagination
                    prevPageText='prev'
                    nextPageText='next'
                    firstPageText='first'
                    lastPageText='last'
                    activePage={activePage}
                    itemsCountPerPage={pageLimit}
                    totalItemsCount={allBlogs && allBlogs.length}
                    onChange={handlePageChange}
                />
            </div>

            {pagedBlogs.map(blog => {
                return <BlogItem key={blog.id} post={blog} />;
            })}
        </div>
    );
}
