import {
  Text, View, SafeAreaView, FlatList,
  ScrollView, StyleSheet,
} from "react-native";

import { numberFormat } from "../services/numberFormat";

export const Cart = ({ items, getTotalPrice }) => {

  const total = getTotalPrice()

  const renderProductCart = ({ item: product }) => {
    return (
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.product.name}</Text>
        <Text style={styles.quantity}>{product.qty}</Text>
        <Text style={styles.price}>{numberFormat(product.qty * product.product.price)}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flexGrow: 0 }}>
      <ScrollView >
        <Text style={
          { flex: 1, alignSelf: 'center', textAlignVertical: 'center', fontSize: 20, fontWeight: 'bold', paddingTop: 20 }
        }>
          Lista de Pedido
        </Text>



        <FlatList
          style={styles.productsList}
          contentContainerStyle={styles.infoContainer}
          keyExtractor={(item) => item.id.toString()}
          data={items}
          renderItem={renderProductCart}
        />

        <Text style={
          { flex: 1, alignSelf: 'center', textAlignVertical: 'center', fontSize: 20, fontWeight: 'bold' }
        }>
          Total
        </Text>
        <Text style={
          { flex: 1, alignSelf: 'center', textAlignVertical: 'center', fontSize: 20, fontWeight: 'bold' }
        }>
          {numberFormat(total)}
        </Text>


      </ScrollView>
    </SafeAreaView >
  )
};

const styles = StyleSheet.create({
  productsList: {
    flex: 1, flexDirection: 'row',
  },
  productsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  infoContainer: {
    padding: 16,
    flex: 1,
    lexDirection: 'row',
  },
  name: {
    fontSize: 22,
    color: "gray",
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",

  },
  quantity: {
    fontSize: 16,
    fontWeight: "400",
    color: "#787878",

  },


});