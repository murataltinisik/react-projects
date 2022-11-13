package com.facebook.backend.utilities;

import java.sql.Timestamp;

public class CurrentTime {

    public static String currentTimeStamp(){
        return String.valueOf(new Timestamp(System.currentTimeMillis()));
    }

}
