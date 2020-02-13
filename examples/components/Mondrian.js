import React, { Component } from 'react';
import Designer from '../../src/Designer';

export default class extends Component {
  state = {
    update: [
      {
        "cam_number": 1,
        "amount_peoples": 14,
      },
      {
        "cam_number": 2,
        "amount_peoples": 4,
      },
      {
        "cam_number": 3,
        "amount_peoples": 22,
      },
      {
        "cam_number": 4,
        "amount_peoples": 1,
      }
    ],

    objects: [
      {
        "text": "cam_1",
        "rotate": 0,
        "fontWeight": "normal",
        "fontStyle": "normal",
        "textDecoration": "none",
        "fill": "yellow",
        "fontSize": 20,
        "fontFamily": "Open Sans",
        "width": 80,
        "height": 80,
        "strokeWith": 0,
        "blendMode": "normal",
        "quantatyPeoples": 0,
        "type": "camera",
        "x": 21,
        "y": 18,
        "uuid": "c78d1f9e-a094-4589-9867-abf8daf9c84f"
      },
      {
        "text": "cam_2",
        "rotate": 0,
        "fontWeight": "normal",
        "fontStyle": "normal",
        "textDecoration": "none",
        "fill": "yellow",
        "fontSize": 20,
        "fontFamily": "Open Sans",
        "width": 80,
        "height": 80,
        "strokeWith": 0,
        "blendMode": "normal",
        "quantatyPeoples": 0,
        "type": "camera",
        "x": 175,
        "y": 22,
        "uuid": "11891b90-d831-435b-82d2-9b7689138783"
      },
      {
        "text": "cam_3",
        "rotate": 0,
        "fontWeight": "normal",
        "fontStyle": "normal",
        "textDecoration": "none",
        "fill": "yellow",
        "fontSize": 20,
        "fontFamily": "Open Sans",
        "width": 81,
        "height": 79,
        "strokeWith": 0,
        "blendMode": "normal",
        "quantatyPeoples": 0,
        "type": "camera",
        "x": 38,
        "y": 144,
        "uuid": "e276e9a5-4fd7-469f-b544-1d5da0d3be47"
      },
      {
        "text": "cam_4",
        "rotate": 0,
        "fontWeight": "normal",
        "fontStyle": "normal",
        "textDecoration": "none",
        "fill": "yellow",
        "fontSize": 20,
        "fontFamily": "Open Sans",
        "width": 80,
        "height": 80,
        "strokeWith": 0,
        "blendMode": "normal",
        "quantatyPeoples": 0,
        "type": "camera",
        "x": 198,
        "y": 142,
        "uuid": "907f7f7b-360e-431f-af1c-8531587a4448"
      }
    ]
  };

  parsingCamNumber(cam) {
    return Number(cam.split("_")[1])
  }

  updateCamData(camNumber, camObject) {
    let camNew = {}
    this.state.update.map((camData, index) => {
      if (camData.cam_number === camNumber) {
        camNew = {
          ...camObject,
          quantatyPeoples: camData.amount_peoples
        }
      }
    })
    return camNew
  }

  componentDidMount() {
    setInterval(() => {
      console.log("[MAP]: start update counters")
      let updateObjects = []

      console.log("update by: ", this.state.update)
      console.log("current objects: ", this.state.objects)
      this.state.objects.map((object, index) => {
        console.log("current object: ", object)
        if (object.type === "camera") {
          let camNumber = this.parsingCamNumber(object.text)
          updateObjects.push(this.updateCamData(camNumber, object))
        }
        else {
          updateObjects.push(object)
        }
      })
      console.log("current objects: ", updateObjects)
      this.setState({
        objects: updateObjects
      })
      // this.setState({
      // objects: updateObjects
      // })
      // this.editor.updateObjectsCounting([
      //   {
      //     "cam": "cam_1",
      //     "amountPeoples": 1,
      //   }
      // ])
    }, 1000)
  }

  handleUpdate(objects) {
    this.setState({ objects });
  }

  handleClick(object) {
    console.log("[MAP]: handle click on object: ", object)
  }

  render() {
    return (
      <Designer
        handleClicker={this.handleClick}
        onRef={ref => { this.editor = ref }}
        width={350} height={400}
        objects={this.state.objects}
        onUpdate={this.handleUpdate.bind(this)} />
    );
  }
}
