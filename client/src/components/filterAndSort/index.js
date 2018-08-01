import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const filterAndSort = (props) => (
	<div>
		<Grid container justify="center" direction="column" alignItems="center">
			<Grid item xs={12}>
				<Paper>
					<Button disabled>
						Sort By:
					</Button>
				
					<Grid container>
						<Grid item xs={2}>
							<Button>
								Date
							</Button>
						</Grid>
						
						<Grid item xs={2}>
							<Button color="primary" variant="outlined" onClick={() => props.sortByDateAsc()}>
								Asc
							</Button>
						</Grid>

						<Grid item xs={2}>
							<Button color="primary" variant="outlined" onClick={() => props.sortByDateDesc()}>
								Desc
							</Button>
						</Grid>

						<Grid item xs={2}>
							<Button>
								stars
							</Button>
						</Grid>
						
						<Grid item xs={2}>
							<Button color="primary" variant="outlined" onClick={() => props.sortByStarsAsc()}>
								Asc
							</Button>
						</Grid>

						<Grid item xs={2}>
							<Button color="primary" variant="outlined" onClick={() => props.sortByStarsDesc()}>
								Desc
							</Button>
						</Grid>

					</Grid>
				</Paper>
			</Grid>
		</Grid>
	</div>
);

export default filterAndSort;