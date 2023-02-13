import Layout from '../components/layout'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useRef, useEffect, useState } from "react";

const data = ["a", "b", "c", "d","e","f","g","h","i","j","a", "b", "c", "d","e","f","g","h","i","j","a", "b", "c", "d","e","f","g","h","i","j"];
const dataPerLoad = 20;

export default function GridName({ }) {
  const refs = useRef([]);
  const [next, setNext] = useState(dataPerLoad);
  const handleMoreData = () => {
      setNext(next + dataPerLoad);
    };  

  return (
    <Layout>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {data?.slice(0, next)?.map((d, i) => (
          <Grid item  key={i} ref={(ref) => (refs.current[i] = ref)} xs={3}>
            <Box sx={{ maxWidth: 350 }}>
              <Card variant="outlined">
                  <React.Fragment>
                    <CardContent>
                      <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                        {d}
                      </Typography>
                      <Typography variant="h6" component="div">
                      Brentwood
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Essex
                      </Typography>
                      <Typography variant="body2">
                        England
                        <br />
                        CM144EQ
                      </Typography>
                    </CardContent>
                    {/* <CardActions>
                      <Button size="small">Load More</Button>
                    </CardActions> */}
                  </React.Fragment>
              </Card>
            </Box>
          </Grid>   
        ))}
              {next < data?.length && (
          <Button
            className="mt-4"
            onClick={handleMoreData}
          >
            Load more
          </Button>
        )}
      </Grid>
    </Layout>
  );
  }
