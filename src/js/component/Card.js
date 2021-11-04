import React from "react";

export const Card = props => {
	return (
		/*<div className="card">
			<img
				src="https://picsum.photos/500/325?random=12"
				className="card-img-top"
				alt="card image card"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>*/
		<div className="card-group">
			<div className="card">
				<img
					src="https://picsum.photos/500/325?random=12"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</p>
				</div>
				<div className="card-footer">
					<small className="text-muted">
						<div className="d-grid gap-2 col-6 mx-auto">
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</small>
				</div>
			</div>
		</div>
	);
};
