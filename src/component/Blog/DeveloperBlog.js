/** @format */

import React, { Component } from 'react';
import BlogTwoitems from '../Blog/BlogTwoitems';
import Reveal from 'react-reveal/Reveal/';
class BlogTwo extends Component {
	render() {
		return (
			<section className='d_blog_area_two sec_pad' id='blog'>
				<div className='container'>
					<div className='dev_tittle mb_70'>
						<h2>My Blog</h2>
						<p>Some of my personal article.</p>
					</div>
					<Reveal effect='fadeInUp' duration={1000}>
						<div className='row'>
							<BlogTwoitems
								bTitle='Contrary to popular belief'
								bDetails='Suspendisse in mattis neque, sed accu- msan erat. Maecenas eget metus dui. Vestibulum accumsan massa quam..'
								btnText='Read More'
								image='post-img1.jpg'
								Pdata='Jan 14'
							/>
							<BlogTwoitems
								bTitle='Behind the color'
								bDetails='Suspendisse in mattis neque, sed accu- msan erat. Maecenas eget metus dui. Vestibulum accumsan massa quam..'
								btnText='Read More'
								image='post-img2.jpg'
								Pdata='Mar 30'
							/>
						</div>
					</Reveal>
				</div>
			</section>
		);
	}
}
export default BlogTwo;
