import React, { FC } from "react";
import { PhotoTypes } from "../../data/guestPageData";
import PhotoItem from "./PhotoItem";
import { GridList, GridListTile, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useTrail, animated } from "react-spring";
import delay from "delay";

type PropsTypes = {
  photos: PhotoTypes[];
  photoHaveAction?: boolean;
  className?: string;
};

const PhotoGrid: FC<PropsTypes> = (props) => {
  const classes = useStyles();
  const { photos, photoHaveAction, className } = props;

  const trails = useTrail(photos.length, {
    to: async (next: any) => {
      try {
        await next({
          to: { opacity: 1, transform: `translateY(0%)` },
          reset: true,
        });
        await delay(3000);
        await next({
          to: { opacity: 0, transform: `translateY(50%)` },
          reset: true,
          from: { opacity: 1, transform: `translateY(0%)` },
        });
      } catch (error) {
        console.error(error);
      }
    },
    from: { opacity: 0, transform: `translateY(50%)` },
  });
  const AnimatedGrid = animated(GridListTile);

  return (
    <GridList
      cols={!!photoHaveAction ? 4 : 3}
      cellHeight="auto"
      className={` ${classes.photoGridWrapper} ${className}`}
      spacing={2}
    >
      {photos.length !== 0 ? (
        photos.map((photo, index) => (
          <AnimatedGrid
            key={index}
            style={!!photoHaveAction ? undefined : trails[index]}
            cols={1}
          >
            <PhotoItem withAction={!!photoHaveAction} photo={photo} />
          </AnimatedGrid>
        ))
      ) : (
        <GridListTile cols={4} className={classes.noPhoto}>
          <Typography variant="h3">No Photo To Display</Typography>
        </GridListTile>
      )}
    </GridList>
  );
};

export default PhotoGrid;

const useStyles = makeStyles(() => ({
  photoGridWrapper: {
    display: "flex",
    padding: "0px 8px",
    overflow: "hidden",
  },
  noPhoto: {
    width: "100%",
    height: "100%",
    textAlign: "center",
  },
}));
