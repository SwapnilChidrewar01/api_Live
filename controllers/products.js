const Product = require('../models/product')

const getAllProducts = async (req, res) => {
    const { name, price, sort, select } = req.query;
    const queryObject = {};
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' };
    }
    if (price) {
        queryObject.price = price;
    }
    let apidata = Product.find(queryObject);
    if (sort) {
        let sortFix = sort.split(',').join(" ");
        // queryObject.sort = sortFix
        apidata = apidata.sort(sortFix)
    }
    if (select) {
        // let selectFix = select.replace(",", " ");
        let selectFix = select.split(',').join(" ");
        apidata = apidata.select(selectFix)
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;
    let skip = (page - 1) * limit;
    apidata = apidata.skip(skip).limit(limit)

    const Products = await apidata;
    res.status(200).json({ Products })
}

const getAllProductsTesting = async (req, res) => {
    const mydata = await Product.find({})
    res.status(200).json({ mydata })
}


module.exports = { getAllProducts, getAllProductsTesting }