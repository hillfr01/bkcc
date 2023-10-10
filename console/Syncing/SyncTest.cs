using Microsoft.VisualStudio.TestPlatform.TestHost;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using Xunit;

namespace DeveloperSample.Syncing
{
    public class SyncTest
    {
        [Fact]
        public void CanInitializeCollectionUsingTasks()
        {
            var debug = new SyncDebug();
            var items = new List<string>();
            for (int i = 1; i <= 1000000; i++)
            {
                items.Add(i.ToString());
            }
            var result = debug.InitializeListUsingTasks(items);
            Assert.Equal(items.Count, result.Count);
        }

        [Fact]
        public void CanInitializeCollectionUsingParallel()
        {
            var debug = new SyncDebug();
            var items = new List<string>();
            for (int i = 1; i <= 1000000; i++)
            {
                items.Add(i.ToString());
            }
            var result = debug.InitializeListUsingParallel(items);
            Assert.Equal(items.Count, result.Count);
        }


        [Fact]
        public void ItemsOnlyInitializeOnce()
        {
            var debug = new SyncDebug();
            var count = 0;
            var dictionary = debug.InitializeDictionary(i =>
            {
                Thread.Sleep(1);
                Interlocked.Increment(ref count); 
                return i.ToString();
            });
            Assert.Equal(100, count); 
            Assert.Equal(100, dictionary.Count);
        }

        [Fact]
        public void BasicTestInterlock()
        {
            var debug = new SyncDebug();

            Thread thread1 = new Thread(new ThreadStart(debug.TestInterlocked));
            Thread thread2 = new Thread(new ThreadStart(debug.TestInterlocked));
            Thread thread3 = new Thread(new ThreadStart(debug.TestInterlocked));
            thread1.Start();
            thread2.Start();
            thread3.Start();
            thread1.Join();
            thread2.Join();
            thread3.Join();

            Assert.Equal(300000, debug.TestInt);
        }
    }
}