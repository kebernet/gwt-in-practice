/*
 * ShoppingEntryPoint.java
 *
 * Created on March 29, 2007, 12:36 AM
 *
 * To change this template, choose Tools | Template Manager
 * and open the template in the editor.
 */

package com.manning.gwtip.bookstore.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.ui.RootPanel;
import com.manning.gwtip.bookstore.client.view.ShoppingDisplay;

/**
 *
 * @author cooper
 */
public class ShoppingEntryPoint implements EntryPoint{
    
    /** Creates a new instance of ShoppingEntryPoint */
    public ShoppingEntryPoint() {
    }
    
    public void onModuleLoad() {
        
        ShoppingController.getInstance().updateCategories();
        ShoppingController.getInstance().findAllBooks();
        RootPanel.get().add( new ShoppingDisplay() );
        
    }
}
