Introduce
    This project is demo page of date-picker.

Install
    1. install npm 8.11.1
    2. npm i
    3. npm start
    4. open http://localhost:3000

Code Structure

Date picker
    User can change day by input or select day in calendar

    Props interface
        Name        type            Default             Description
        =========================================================================
        date        object          Null                init date
        onChange    function(date)  Function.prototype  callback when date change

Input box
    User can input date

    Props interface
        Name        type            Default             Description
        =========================================================================
        date        string          ''                  init date
        onChange    function(date)  Function.prototype  callback when date change

    components
        - calander icon
        - input element
        - calender component

    props
        - className
        - styles
        - onChange
        - date (default: new Date())

    state
        - showCalender
        - date (timeStamp)

    attr
        - onClick (set showCalender to true)
        - onChange

Calander
    User can choose day in calendar

    Props interface
        Name        type            Default             Description
        =========================================================================
        date        object          Null                init date
        onSelect    function(date)  Function.prototype  callback when date change

    component
        - DateSeletor

            components
                - left arrow, right arrow
                - year button
                - date button

            props
                - date
                - className
                - styles

            state
                - display month
                - display year

            attr
                - onClick


        - MonthSelector

            components
                - left arrow, right arrow
                - year button
                - month button

            props
                - date
                - className
                - styles

            state
                - display month
                - display year

        - YearSelector

            components
                - left arrow, right arrow
                - year button

            props
                - date
                - className
                - styles

            state
                - display month
                - display year

            attr
                - onClickYear
                - onClick

    props
        - date
        - onChange (update input value)

    state
        - view type

    attr
        - onChangeView

    configuration
        - {
            year: <component>,
            month: <component>,
            date: <component>
        }

package usage
    html-loader - load html into webpack
    svg-url-loader - load svg file
    @babel/plugin-proposal-class-properties - enable class property (state in class)
    webpack-dev-server - dev web project
    eslint - check eslint
