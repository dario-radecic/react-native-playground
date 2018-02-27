// LIST ITEM COMPONENT
const ListItem = (props) => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
);



// LIST COMPONENT (eg PlaceList)
<ListItem key={i} placeName={place} onItemPressed={() => props.onItemDeleted(i)} />



// COMPONENT WHERE IT'S RENDERED (eg App)
<PlaceList places={this.state.places} onItemDeleted={this.placeDeletedHandler} />

placeDeletedHandler = index => {
  this.setState(prevState => {
    return {
      places: prevState.places.filter((place, i) => {
        return i !== index;
      })
    };
  });
};