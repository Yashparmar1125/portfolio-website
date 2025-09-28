import pandas as pd
from sqlalchemy import create_engine

# Database configuration
db_config = {
    'host': 'localhost',
    'port': 5432,
    'database': 'Movie_Warehouse',
    'user': 'postgres',
    'password': '1125'
}

# Create SQLAlchemy engine
engine = create_engine(
    f"postgresql+psycopg2://{db_config['user']}:{db_config['password']}@{db_config['host']}:{db_config['port']}/{db_config['database']}"
)

# List of queries and their sheet names
queries = [
    {
        'name': 'Top 10 Movies by Tickets',
        'sql': """
            SELECT 
                t.t_name AS theater_name,
                m.title AS movie_title,
                SUM(f.ticketSold) AS total_tickets
            FROM Fact_Table f
            JOIN Theater t ON f.t_id = t.t_id
            JOIN Movies m ON f.m_id = m.m_id
            GROUP BY t.t_name, m.title
            ORDER BY total_tickets DESC
            LIMIT 10;
        """
    },
    {
        'name': 'Monthly Revenue',
        'sql': """
            SELECT d.month, d.year, SUM(f.totalAmount) AS revenue
            FROM Fact_Table f
            JOIN Date d ON f.d_id = d.d_id
            GROUP BY d.year, d.month
            ORDER BY d.year, d.month;
        """
    },
    {
        'name': 'City Revenue',
        'sql': """
            SELECT c.location AS city, SUM(f.totalAmount) AS revenue
            FROM Fact_Table f
            JOIN Customer c ON f.c_id = c.c_id
            GROUP BY c.location
            ORDER BY revenue DESC;
        """
    },
    {
        'name': 'Theater Revenue',
        'sql': """
            SELECT t.t_name, SUM(f.totalAmount) AS revenue
            FROM Fact_Table f
            JOIN Theater t ON f.t_id = t.t_id
            GROUP BY t.t_name
            ORDER BY revenue DESC;
        """
    },
    {
        'name': 'Weekday vs Weekend Revenue',
        'sql': """
            SELECT 
              CASE WHEN d.isWeekend THEN 'Weekend' ELSE 'Weekday' END AS day_type,
              SUM(f.totalAmount) AS revenue
            FROM Fact_Table f
            JOIN Date d ON f.d_id = d.d_id
            GROUP BY day_type;
        """
    },
    {
        'name': 'Monthly Tickets and Revenue',
        'sql': """
            SELECT d.year, d.month, SUM(f.ticketSold) AS tickets, SUM(f.totalAmount) AS revenue
            FROM Fact_Table f
            JOIN Date d ON f.d_id = d.d_id
            GROUP BY d.year, d.month
            ORDER BY d.year, d.month;
        """
    },
    {
        'name': 'Movie Stats',
        'sql': """
            SELECT m.title, m.genre, m.language, COUNT(DISTINCT f.t_id) AS theaters_screened,
                   SUM(f.ticketSold) AS total_tickets, SUM(f.totalAmount) AS total_revenue
            FROM Fact_Table f
            JOIN Movies m ON f.m_id = m.m_id
            GROUP BY m.title, m.genre, m.language
            ORDER BY total_revenue DESC;
        """
    },
    {
        'name': 'Top Movie per Theater',
        'sql': """
            SELECT *
            FROM (
                SELECT 
                    t.t_name AS theater_name,
                    m.title AS movie_title,
                    SUM(f.ticketSold) AS total_tickets,
                    RANK() OVER (PARTITION BY t.t_id ORDER BY SUM(f.ticketSold) DESC) AS rnk
                FROM Fact_Table f
                JOIN Theater t ON f.t_id = t.t_id
                JOIN Movies m ON f.m_id = m.m_id
                GROUP BY t.t_id, t.t_name, m.title
            ) sub
            WHERE rnk = 1;
        """
    }
]

# Write results to Excel
with pd.ExcelWriter("movie_analytics_report.xlsx", engine='openpyxl') as writer:
    for q in queries:
        df = pd.read_sql(q['sql'], engine)
        df.to_excel(writer, sheet_name=q['name'][:31], index=False)

print("Excel file 'movie_analytics_report.xlsx' created successfully.")
