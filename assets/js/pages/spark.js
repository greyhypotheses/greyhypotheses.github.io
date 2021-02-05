
document.write("<table id='example' class='display'>\n" +
    "        <thead>\n" +
    "        <tr>\n" +
    "          <th class='header'></th>\n" +
    "          <th class='header'><a href='https://github.com/briefings/buildings'>buildings</a></th>\n" +
    "          <th class='header'><a href='https://github.com/briefings/stocks'>stocks</a></th>\n" +
    "          <th class='header'><a href='https://github.com/briefings/firms'>firms</a></th>\n" +
    "          <th class='header'><a href='https://github.com/briefings/bikeshare'>bikeshare</a></th>\n" +
    "          <th class='header'></th>\n" +
    "        </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "        <tr style='height: 35px'>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>fundamentals</td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td class='title'>filtering</td>\n" +
    "          <td><a href='https://github.com/briefings/buildings/blob/master/src/main/scala/com/grey/queries/FilteringOperators.scala'>$\\checkmark$</a></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td>where, filter</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td class='title'>logical operators</td>\n" +
    "          <td><a href='https://github.com/briefings/buildings/blob/master/src/main/scala/com/grey/queries/LogicalOperators.scala'>$\\checkmark$</a></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td>like, in, between, is null\, etc.</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td class='title'>relational operators</td>\n" +
    "          <td><a href='https://github.com/briefings/buildings/blob/master/src/main/scala/com/grey/queries/RelationalOperators.scala'>$\\checkmark$</a></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td>$=$, $\\neq$, $\\gt$, $\\lt$, $\\ge$, $\\le$</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td class='title'>fundamental clauses</td>\n" +
    "          <td><a href='https://github.com/briefings/buildings/blob/master/src/main/scala/com/grey/queries/FundamentalClauses.scala'>$\\checkmark$</a></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td>limit, order by</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td class='title'>arithmetic</td>\n" +
    "          <td><a href='https://github.com/briefings/buildings/blob/master/src/main/scala/com/grey/queries/ArithmeticExpressions.scala'>$\\checkmark$</a></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "        </tr>\n" +
    "        <tr style='height: 35px'>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>basics</td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td class='title'>aggregating</td>\n" +
    "          <td></td>\n" +
    "          <td><a href='https://github.com/briefings/stocks/blob/master/src/main/scala/com/grey/queries/Aggregating.scala'>$\\checkmark$</a></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td>count(), sum(), avg(), min(), max()</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td class='title'>conditions</td>\n" +
    "          <td></td>\n" +
    "          <td><a href='https://github.com/briefings/stocks/blob/master/src/main/scala/com/grey/queries/Conditionals.scala'>$\\checkmark$</a></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td>via CASE Statement</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td class='title'>grouping</td>\n" +
    "          <td></td>\n" +
    "          <td><a href='https://github.com/briefings/stocks/blob/master/src/main/scala/com/grey/queries/Grouping.scala'>$\\checkmark$</a></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td>group by, having$^{1}$</td>\n" +
    "        </tr>\n" +
    "        <tr style='height: 35px'>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>joins</td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td class='title'>inner join</td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td><a href='https://github.com/briefings/firms/blob/master/src/main/scala/com/grey/queries/InnerJoin.scala'>$\\checkmark$</a></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td class='title'>outer joins</td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td><a href='https://github.com/briefings/firms/blob/master/src/main/scala/com/grey/queries/OuterJoin.scala'>$\\checkmark$</a></td>\n" +
    "          <td></td>\n" +
    "          <td>e.g., left, right, etc.</td>\n" +
    "        </tr>\n" +
    "        <tr style='height: 35px'>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>via windows</td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td class='title'>numbering</td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td><a href='https://github.com/briefings/bikeshare/blob/master/src/main/scala/com/grey/queries/NumberingArithmetic.scala'>$\\checkmark$</a></td>\n" +
    "          <td>row_number()</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td class='title'>continuous arithmetic</td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td><a href='https://github.com/briefings/bikeshare/blob/master/src/main/scala/com/grey/queries/ContinuousArithmetic.scala'>$\\checkmark$</a></td>\n" +
    "          <td></td>\n" +
    "        </tr>\n" +
    "        <tr style='height: 35px'>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>via grouping</td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td class='title'>ranking</td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td><a href='https://github.com/briefings/bikeshare/blob/master/src/main/scala/com/grey/queries/RankingArithmetic.scala'>$\\checkmark$</a></td>\n" +
    "          <td>rank(), dense_rank()</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td class='title'>hierarchical arithmetic</td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td></td>\n" +
    "          <td><a href='https://github.com/briefings/bikeshare/blob/master/src/main/scala/com/grey/queries/HierarchicalArithmetic.scala'>$\\checkmark$</a></td>\n" +
    "          <td>rollup()</td>\n" +
    "        </tr>\n" +
    "        </tbody>\n" +
    "        <tfoot><tr><th colspan='6' style='text-align: left' class='footer'><br/>$^{1}$Dataset[Row] does not have a <b>having</b> function, instead there are effective " +
    "proxy functions.  Beware of the SQL query structure w.r.t. using Spark SQL <b>having</b></th></tr></tfoot>" +
    "\n" +
    "      </table>");