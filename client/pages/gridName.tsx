import Layout from '../components/layout'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useRef, useEffect } from "react";

const data = ["a", "b", "c", "d","e","f","g","h","i","j"];





export default function GridName() {
  const refs = useRef([]);

  useEffect(() => {
    console.log(refs);
  }, []);

  return (
    <Layout>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {data.map((d, i) => (
          <Grid item xs={8} key={i} ref={(ref) => (refs.current[i] = ref)}>
            <Box sx={{ maxWidth: 250 }}>
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
                    <CardActions>
                      <Button size="small">Load More</Button>
                    </CardActions>
                  </React.Fragment>
              </Card>
            </Box>
          </Grid>   
        ))}
      </Grid>
    </Layout>
  );
  }
